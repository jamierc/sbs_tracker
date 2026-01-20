cat << 'EOF' >> ~/.bashrc && source ~/.bashrc function claude_go() { # Usage: claude_go ["custom message"]
# If a custom message is provided as the first argument, it will be used. 
# Otherwise, it defaults to "go on". local message="go on" if [[ -n "$1" ]]; then message="$1" fi

    local reset_time=$(claude -p 'check' | awk '{print $NF}')
    
    # Calculate the timestamp for today's reset time
    local reset_ts=$(date -d "$reset_time" +%s)
    local now_ts=$(date +%s)
    
    # If the reset time has already passed today, add a day's worth of seconds
    local sleep_duration_seconds=$(( reset_ts - now_ts ))
    if [[ $sleep_duration_seconds -lt 0 ]]; then
        sleep_duration_seconds=$(( sleep_duration_seconds + 86400 ))
    fi
    
    echo "Sleeping for $sleep_duration_seconds seconds until $reset_time..."
    sleep "$sleep_duration_seconds" && claude --permission-mode acceptEdits -c "$message"
} EOF 
