#!/usr/bin/env python3
"""Check Quick Setup sheet for auxiliary exercise options"""

import openpyxl

excel_file = 'SBS Hypertrophy Template.xlsx'
wb = openpyxl.load_workbook(excel_file, data_only=True)

# Check the Quick Setup sheet
sheet = wb['Quick Setup']

print("=" * 60)
print("Quick Setup sheet - Range B19:D26")
print("=" * 60)

# Get the range B19:D26
for row in range(19, 27):
    values = []
    for col in ['B', 'C', 'D']:
        cell = sheet[f'{col}{row}']
        values.append(cell.value if cell.value else '')
    print(f"Row {row}: {values}")

# Also check what labels might be in column A
print("\n" + "=" * 60)
print("Column A labels near the auxiliary range:")
print("=" * 60)
for row in range(15, 30):
    cell = sheet[f'A{row}']
    if cell.value:
        print(f"Row {row}: {cell.value}")
