# `ovst_sks_err_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| err_code | char(2) | NO | PRI |  |  |  |
| err_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_err_name | err_name | yes | 1 |
| PRIMARY | err_code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "err_code": "11",
    "err_name": "ไม่ระบุ InvNo"
  },
  {
    "err_code": "12",
    "err_name": "InvNo ซ้ำ"
  },
  {
    "err_code": "16",
    "err_name": "ไม่ระบุ AuthCode"
  },
  {
    "err_code": "17",
    "err_name": "Authcode ไม่ถูกต้อง"
  },
  {
    "err_code": "21",
    "err_name": "ไม่ระบุ HN ในรายการ"
  },
  {
    "err_code": "22",
    "err_name": "HN ไม่อยู่ในทะเบียนผู้มีสิทธิ"
  },
  {
    "err_code": "26",
    "err_name": "ไม่ระบุ MemberNo หรือ Member No ไม่ตรงกับ HN"
  },
  {
    "err_code": "27",
    "err_name": "MemberNo ไม่อยู่ในทะเบียนผู้มีสิทธิ"
  }
]
```
