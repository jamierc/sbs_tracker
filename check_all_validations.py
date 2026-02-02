#!/usr/bin/env python3
"""Check all data validations in program sheets"""

import openpyxl

excel_file = 'SBS Hypertrophy Template.xlsx'
wb = openpyxl.load_workbook(excel_file, data_only=False)

# Check the 2x sheet
sheet = wb['2x']

print("=" * 60)
print("All data validations in 2x sheet:")
print("=" * 60)

if hasattr(sheet, 'data_validations'):
    for idx, dv in enumerate(sheet.data_validations.dataValidation, 1):
        if dv.formula1:
            print(f"\n#{idx} Validation for cells: {dv.sqref}")
            print(f"  Formula: {dv.formula1}")
            print(f"  Type: {dv.type}")

            # Try to see what row this is on
            try:
                cell_ref = str(dv.sqref).split()[0].split(':')[0]
                cell = sheet[cell_ref]
                print(f"  Sample cell: {cell_ref} (row {cell.row})")
                print(f"  Current value: {cell.value}")
            except:
                pass

# Now check the Quick Setup sheet for the actual auxiliary exercise options
print("\n" + "=" * 60)
print("Quick Setup sheet - searching for auxiliary exercise lists")
print("=" * 60)

quick_setup = wb['Quick Setup']

# Print first 50 rows and first 10 columns to see the structure
for row in range(1, 51):
    row_data = []
    has_content = False
    for col in range(1, 11):
        cell = quick_setup.cell(row, col)
        val = cell.value if cell.value else ''
        if val:
            has_content = True
        row_data.append(val)

    if has_content:
        print(f"Row {row}: {row_data}")
