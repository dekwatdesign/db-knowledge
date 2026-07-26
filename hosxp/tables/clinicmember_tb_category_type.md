# `clinicmember_tb_category_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinicmember_tb_category_type_id | int(11) | NO | PRI | 0 |  |  |
| clinicmember_tb_category_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinicmember_tb_category_type_name | clinicmember_tb_category_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | clinicmember_tb_category_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "clinicmember_tb_category_type_id": 1,
    "clinicmember_tb_category_type_name": "CAT 1 (ผู้ป่วยใหม่ : 2HRZE/4HR)",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_type_id": 2,
    "clinicmember_tb_category_type_name": "CAT 2 (ผู้ป่วยกลับเป็นซ้ำ : 2HRZES/1HRZE/5HRE)",
    "hos_guid": null
  },
  {
    "clinicmember_tb_category_type_id": 3,
    "clinicmember_tb_category_type_name": "CAT 3 (2HRZ/2HR)",
    "hos_guid": null
  }
]
```
