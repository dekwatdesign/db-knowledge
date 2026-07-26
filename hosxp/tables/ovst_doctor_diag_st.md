# `ovst_doctor_diag_st`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_doctor_diag_st_id | int(11) | NO | PRI | 0 |  |  |
| ovst_doctor_diag_st_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_ovst_doctor_diag_st_name | ovst_doctor_diag_st_name | yes | 1 |
| PRIMARY | ovst_doctor_diag_st_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "ovst_doctor_diag_st_id": 1,
    "ovst_doctor_diag_st_name": "ซ้าย"
  },
  {
    "ovst_doctor_diag_st_id": 2,
    "ovst_doctor_diag_st_name": "ขวา"
  },
  {
    "ovst_doctor_diag_st_id": 3,
    "ovst_doctor_diag_st_name": "ทั้งสองด้าน"
  },
  {
    "ovst_doctor_diag_st_id": 4,
    "ovst_doctor_diag_st_name": "ไม่ระบุ"
  }
]
```
