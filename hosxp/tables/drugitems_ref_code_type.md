# `drugitems_ref_code_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| drugitems_ref_code_type_id | int(11) | NO | PRI | 0 |  |  |
| drugitems_ref_code_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_drugitems_ref_code_type_name | drugitems_ref_code_type_name | yes | 1 |
| PRIMARY | drugitems_ref_code_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "drugitems_ref_code_type_id": 7,
    "drugitems_ref_code_type_name": "รหัส Claim กองทุนผู้ประกันตนต่างด้าว"
  },
  {
    "drugitems_ref_code_type_id": 4,
    "drugitems_ref_code_type_name": "รหัส GPO"
  },
  {
    "drugitems_ref_code_type_id": 5,
    "drugitems_ref_code_type_name": "รหัส MIMS"
  },
  {
    "drugitems_ref_code_type_id": 6,
    "drugitems_ref_code_type_name": "รหัส SAP"
  },
  {
    "drugitems_ref_code_type_id": 3,
    "drugitems_ref_code_type_name": "รหัส TMT"
  },
  {
    "drugitems_ref_code_type_id": 2,
    "drugitems_ref_code_type_name": "รหัสกรมบัญชีกลาง"
  },
  {
    "drugitems_ref_code_type_id": 1,
    "drugitems_ref_code_type_name": "รหัสมาตรฐาน 19 หลัก"
  }
]
```
