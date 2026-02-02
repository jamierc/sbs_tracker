#!/usr/bin/env python3
"""Find all auxiliary exercise options in Setup sheet"""

import openpyxl

excel_file = 'SBS Hypertrophy Template.xlsx'
wb = openpyxl.load_workbook(excel_file, data_only=True)

# Check the Setup sheet - looking for exercise lists
setup = wb['Setup']

print("=" * 60)
print("Setup sheet - looking for exercise categories")
print("=" * 60)

# Print rows 1-100 to see the structure
for row in range(1, 101):
    row_data = []
    has_content = False
    for col in range(1, 6):  # Check first 5 columns
        cell = setup.cell(row, col)
        val = cell.value if cell.value else ''
        if val:
            has_content = True
        row_data.append(val)

    if has_content:
        # Clean up the display
        display = []
        for item in row_data:
            if item:
                display.append(str(item))
        if display:
            print(f"Row {row}: {' | '.join(display)}")
