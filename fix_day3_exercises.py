#!/usr/bin/env python3
"""Fix Day 3 exercises in 3x program - replace Leg Press with Hack Squat"""

import re

# Read the HTML file
with open('index.html', 'r') as f:
    content = f.read()

# Find the 3x program section
# We need to replace Leg Press with Hack Squat ONLY on Day 3

# Strategy: Find patterns where we have:
# - "3": [ (Day 3 marker)
# - followed by exercises
# - one of which is "Leg Press"

# Use regex to find and replace
# Pattern: within day "3", find "Leg Press" and replace with "Hack Squat"
# Also need to adjust weight from 115.0 (Leg Press) to 125.0 (Hack Squat)

# More precise approach: find the 3x section first
three_x_start = content.find('"3x": {')
four_x_start = content.find('"4x": {', three_x_start)

if three_x_start == -1:
    print("ERROR: Could not find 3x program section")
    exit(1)

if four_x_start == -1:
    four_x_start = len(content)

# Extract just the 3x section
three_x_section = content[three_x_start:four_x_start]

print(f"3x section: {three_x_start} to {four_x_start} ({four_x_start - three_x_start} chars)")

# Count how many times we see day "3" in this section
day_3_count = three_x_section.count('"3": [')
print(f"Found {day_3_count} instances of Day 3")

# For each Day 3, we need to find if it has Leg Press and replace with Hack Squat
# This is complex because we need to find the specific exercise within that day

# Let's use a different approach: split by day markers
# Find all occurrences of "3": [ in the 3x section
# Then for each, find the next "name": "Leg Press" within that day
# And replace it with "name": "Hack Squat"

# Actually, simpler approach: use regex to match the specific pattern
# Pattern: "3": [ ... "name": "Leg Press" ... next exercise or end of day

original_section = three_x_section
replacements = 0

# Find each Day 3 block and check if it has Leg Press
# Pattern: "3": [ opens a day, then we have exercises until we hit another day marker or week marker

# Split by day boundaries
parts = re.split(r'("3": \[)', three_x_section)

modified_section = three_x_section

# Simpler regex approach: find Leg Press that comes after "3": [
# Look for pattern: "3": [ followed by any content, then "name": "Leg Press"
# Use a lookahead/lookbehind or process chunks

# Let's process each Day 3 individually
pattern = r'("3": \[.*?)("name": "Leg Press")(.*?)(][\s]*,[\s]*"(?:4|2)": \[|][\s]*\}[\s]*,[\s]*"(?:2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20)": \{)'

def replace_in_day_3(match):
    global replacements
    before = match.group(1)  # Content before "Leg Press"
    name_part = match.group(2)  # "name": "Leg Press"
    after = match.group(3)  # Content after until next day/week
    end = match.group(4)  # The closing bracket and next section

    replacements += 1

    # Replace Leg Press with Hack Squat
    new_name = '"name": "Hack Squat"'

    # Also need to adjust weight - typically Leg Press: 115.0 -> Hack Squat: 125.0
    # But the weight varies by week, so we'll increase by ~10%
    weight_pattern = r'"weight": ([\d.]+)'

    def adjust_weight(w_match):
        weight = float(w_match.group(1))
        new_weight = round(weight * 1.087, 2)  # 125/115 ≈ 1.087
        return f'"weight": {new_weight}'

    # Only adjust the first weight after our name change (the Leg Press weight)
    after_adjusted = re.sub(weight_pattern, adjust_weight, after, count=1)

    return before + new_name + after_adjusted + end

# Apply the regex replacement
modified_section = re.sub(pattern, replace_in_day_3, three_x_section, flags=re.DOTALL)

print(f"Made {replacements} replacements")

# Reconstruct the full content
new_content = content[:three_x_start] + modified_section + content[four_x_start:]

# Verify the changes
new_leg_press_count = modified_section.count('"name": "Leg Press"')
new_hack_squat_count = modified_section.count('"name": "Hack Squat"')
print(f"After fix: Leg Press count: {new_leg_press_count}, Hack Squat count: {new_hack_squat_count}")

# Write the fixed content
with open('index.html', 'w') as f:
    f.write(new_content)

print("Fixed index.html")
