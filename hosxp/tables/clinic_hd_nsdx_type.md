# `clinic_hd_nsdx_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| clinic_hd_nsdx_type_id | int(11) | NO | PRI | 0 |  |  |
| clinic_hd_nsdx_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_clinic_hd_nsdx_type_name | clinic_hd_nsdx_type_name | yes | 1 |
| PRIMARY | clinic_hd_nsdx_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "clinic_hd_nsdx_type_id": 1,
    "clinic_hd_nsdx_type_name": "ผู้ป่วยมีโอกาสเกิดอาการแทรกซ้อนขณะ HD"
  },
  {
    "clinic_hd_nsdx_type_id": 2,
    "clinic_hd_nsdx_type_name": "ผู้ป่วยมีภาวะของเสียและน้ำคั่งเนื่องจากไตเสื่อมหน้าที่"
  },
  {
    "clinic_hd_nsdx_type_id": 3,
    "clinic_hd_nsdx_type_name": "อื่นๆ"
  }
]
```
