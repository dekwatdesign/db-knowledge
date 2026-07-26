# `reporttemplate_print`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| reporttemplate_print_id | int(11) | NO | PRI | 0 |  |  |
| module_name | varchar(100) | YES | MUL | NULL |  |  |
| report_name | varchar(200) | YES |  | NULL |  |  |
| reporttemplate_name | varchar(250) | YES |  | NULL |  |  |
| order_number | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_module_name | module_name | no | 1 |
| ix_unique | module_name | yes | 1 |
| ix_unique | report_name | yes | 2 |
| PRIMARY | reporttemplate_print_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "reporttemplate_print_id": 1,
    "module_name": "IPD_DOCTOR_ORDER_SHEET",
    "report_name": "Doctor for Admit",
    "reporttemplate_name": "XE-FORM-IPD-DOCTOR FOR ADMIT",
    "order_number": null
  },
  {
    "reporttemplate_print_id": 2,
    "module_name": "IPD_DOCTOR_ORDER_SHEET",
    "report_name": "Admission Note",
    "reporttemplate_name": "ADMISSION NOTES",
    "order_number": null
  },
  {
    "reporttemplate_print_id": 3,
    "module_name": "IPD_REGIST",
    "report_name": "Admission Notes",
    "reporttemplate_name": "ADMISSION NOTES",
    "order_number": null
  }
]
```
