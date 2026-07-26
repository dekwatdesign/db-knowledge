# `issue_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_type_id | int(11) | NO | PRI | 0 |  |  |
| issue_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_type_name | issue_type_name | yes | 1 |
| PRIMARY | issue_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "issue_type_id": 1,
    "issue_type_name": "BUG (โปรแกรมทำงานผิดพลาด)"
  },
  {
    "issue_type_id": 3,
    "issue_type_name": "Question (ข้อสงสัยในการทำงาน)"
  },
  {
    "issue_type_id": 2,
    "issue_type_name": "Request (ข้อเสนอเพื่อพัฒนาโปรแกรมเพิ่มเติม)"
  }
]
```
