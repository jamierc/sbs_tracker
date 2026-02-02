#!/usr/bin/env python3
"""Find all exercise categories and options"""

import openpyxl

excel_file = 'SBS Hypertrophy Template.xlsx'
wb = openpyxl.load_workbook(excel_file, data_only=True)

# Check Quick Setup sheet more extensively
quick_setup = wb['Quick Setup']

print("=" * 60)
print("Quick Setup sheet - Full scan for exercise lists")
print("=" * 60)

# Scan more rows to find all exercise categories
for row in range(1, 150):
    row_data = []
    for col in range(1, 6):
        cell = quick_setup.cell(row, col)
        val = cell.value if cell.value else ''
        if val:
            row_data.append(str(val))

    if row_data and any('squat' in str(v).lower() or 'bench' in str(v).lower() or
                        'deadlift' in str(v).lower() or 'ohp' in str(v).lower() or
                        'press' in str(v).lower() or 'leg' in str(v).lower() or
                        'auxiliary' in str(v).lower() or 'variation' in str(v).lower()
                        for v in row_data):
        print(f"Row {row}: {' | '.join(row_data)}")

# Also check for defined names (named ranges)
print("\n" + "=" * 60)
print("Named ranges in workbook:")
print("=" * 60)
for name in wb.defined_names.definedName:
    print(f"{name.name}: {name.attr_text}")
