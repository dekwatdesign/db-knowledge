# `sap_tran_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sap_tran_type_id | int(11) | NO | PRI | 0 |  |  |
| sap_tran_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_sap_tran_type_name | sap_tran_type_name | yes | 1 |
| PRIMARY | sap_tran_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "sap_tran_type_id": 1,
    "sap_tran_type_name": "แปลงจากหน่วยเล็กเป็นหน่วยใหญ่"
  },
  {
    "sap_tran_type_id": 2,
    "sap_tran_type_name": "แปลงจากหน่วยใหญ่เป็นหน่วยเล็ก"
  }
]
```
