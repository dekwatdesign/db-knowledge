# `issue_phase`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| issue_phase_id | int(11) | NO | PRI | 0 |  |  |
| issue_phase_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_issue_phase_name | issue_phase_name | yes | 1 |
| PRIMARY | issue_phase_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "issue_phase_id": 3,
    "issue_phase_name": "Go Live"
  },
  {
    "issue_phase_id": 2,
    "issue_phase_name": "Unit Test"
  },
  {
    "issue_phase_id": 1,
    "issue_phase_name": "เตรียมความพร้อมข้อมูลพื้นฐาน"
  }
]
```
