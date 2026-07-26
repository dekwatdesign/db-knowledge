# `ipd_doctor_order_tpl`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipd_doctor_order_tpl_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(10) | YES | MUL | NULL |  |  |
| template_name | varchar(200) | YES |  | NULL |  |  |
| is_global | char(1) | YES | MUL | NULL |  |  |
| ipd_doctor_order_tpl_type_id | int(11) | YES |  | NULL |  |  |
| design_pas | longtext | YES |  | NULL |  |  |
| design_dfm | longtext | YES |  | NULL |  |  |
| enable_script | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_doctor_code_name | doctor_code | yes | 1 |
| ix_doctor_code_name | template_name | yes | 2 |
| ix_global_name | is_global | no | 1 |
| ix_global_name | template_name | no | 2 |
| PRIMARY | ipd_doctor_order_tpl_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipd_doctor_order_tpl_id": 4,
    "doctor_code": "0048",
    "template_name": "น้ำฟ้า 1",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": null,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  },
  {
    "ipd_doctor_order_tpl_id": 2,
    "doctor_code": "0048",
    "template_name": "ต้นกล้า",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": null,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  },
  {
    "ipd_doctor_order_tpl_id": 5,
    "doctor_code": "0043",
    "template_name": "แฮรี่",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": null,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  },
  {
    "ipd_doctor_order_tpl_id": 6,
    "doctor_code": "0048",
    "template_name": "แฮรี่",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": 0,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  },
  {
    "ipd_doctor_order_tpl_id": 13,
    "doctor_code": "0042",
    "template_name": "ต้นกล้า 25/12/68",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": null,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  },
  {
    "ipd_doctor_order_tpl_id": 9,
    "doctor_code": "0042",
    "template_name": "ต้นกล้า",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": 0,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  },
  {
    "ipd_doctor_order_tpl_id": 12,
    "doctor_code": "0043",
    "template_name": "ภูผา",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": null,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  },
  {
    "ipd_doctor_order_tpl_id": 14,
    "doctor_code": "0043",
    "template_name": "โทโมะ",
    "is_global": null,
    "ipd_doctor_order_tpl_type_id": null,
    "design_pas": null,
    "design_dfm": null,
    "enable_script": null
  }
]
```
