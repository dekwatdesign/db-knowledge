# `issue_module`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_module_id | int(11) | NO | PRI | 0 |  |  |
| issue_module_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_module_name | issue_module_name | yes | 1 |
| PRIMARY | issue_module_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "issue_module_id": 7,
    "issue_module_name": "HOSxP : ระบบ IPD"
  },
  {
    "issue_module_id": 8,
    "issue_module_name": "HOSxP : ระบบการเงิน"
  },
  {
    "issue_module_id": 9,
    "issue_module_name": "HOSxP : ระบบการส่งตัว"
  },
  {
    "issue_module_id": 2,
    "issue_module_name": "HOSxP : ระบบซักประวัติ"
  },
  {
    "issue_module_id": 10,
    "issue_module_name": "HOSxP : ระบบรายงาน"
  },
  {
    "issue_module_id": 1,
    "issue_module_name": "HOSxP : ระบบเวชระเบียน"
  },
  {
    "issue_module_id": 4,
    "issue_module_name": "HOSxP : ระบบห้อง Lab"
  },
  {
    "issue_module_id": 5,
    "issue_module_name": "HOSxP : ระบบห้อง X-Ray"
  }
]
```
