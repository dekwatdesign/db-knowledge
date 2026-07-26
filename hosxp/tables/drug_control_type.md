# `drug_control_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drug_control_type_id | int(11) | NO | PRI | 0 |  |  |
| drug_control_type_name | varchar(200) | YES | UNI | NULL |  |  |
| print_document | char(1) | YES |  | NULL |  |  |
| drug_control_code_prefix | varchar(20) | YES |  | NULL |  |  |
| report_template_name | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drug_control_type_name | drug_control_type_name | yes | 1 |
| PRIMARY | drug_control_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "drug_control_type_id": 1,
    "drug_control_type_name": "วัตถุที่ออกฤทธิ์ต่อจิตและประสาท ประเภทที่ 1",
    "print_document": "Y",
    "drug_control_code_prefix": "HF1",
    "report_template_name": null
  },
  {
    "drug_control_type_id": 2,
    "drug_control_type_name": "วัตถุที่ออกฤทธิ์ต่อจิตและประสาท ประเภทที่ 2",
    "print_document": "Y",
    "drug_control_code_prefix": "HF2",
    "report_template_name": null
  },
  {
    "drug_control_type_id": 3,
    "drug_control_type_name": "วัตถุที่ออกฤทธิ์ต่อจิตและประสาท ประเภทที่ 3",
    "print_document": "Y",
    "drug_control_code_prefix": "HF3",
    "report_template_name": null
  },
  {
    "drug_control_type_id": 4,
    "drug_control_type_name": "วัตถุที่ออกฤทธิ์ต่อจิตและประสาท ประเภทที่ 4",
    "print_document": "Y",
    "drug_control_code_prefix": "HF4",
    "report_template_name": null
  },
  {
    "drug_control_type_id": 11,
    "drug_control_type_name": "ยาเสพติดให้โทษประเภทที่ 1",
    "print_document": "Y",
    "drug_control_code_prefix": "NC1",
    "report_template_name": null
  },
  {
    "drug_control_type_id": 12,
    "drug_control_type_name": "ยาเสพติดให้โทษประเภทที่ 2",
    "print_document": "Y",
    "drug_control_code_prefix": "NC2",
    "report_template_name": null
  },
  {
    "drug_control_type_id": 13,
    "drug_control_type_name": "ยาเสพติดให้โทษประเภทที่ 3",
    "print_document": "Y",
    "drug_control_code_prefix": "NC3",
    "report_template_name": null
  },
  {
    "drug_control_type_id": 14,
    "drug_control_type_name": "ยาเสพติดให้โทษประเภทที่ 4",
    "print_document": "Y",
    "drug_control_code_prefix": "NC4",
    "report_template_name": null
  }
]
```
