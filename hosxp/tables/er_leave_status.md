# `er_leave_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_leave_status_id | int(11) | NO | PRI | 0 |  |  |
| er_leave_status_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_leave_status_name | er_leave_status_name | yes | 1 |
| PRIMARY | er_leave_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (6)

```json
[
  {
    "er_leave_status_id": 1,
    "er_leave_status_name": "Admit"
  },
  {
    "er_leave_status_id": 2,
    "er_leave_status_name": "Refer ทางกาย"
  },
  {
    "er_leave_status_id": 3,
    "er_leave_status_name": "Refer ทางจิต"
  },
  {
    "er_leave_status_id": 4,
    "er_leave_status_name": "รับยา"
  },
  {
    "er_leave_status_id": 5,
    "er_leave_status_name": "Observe"
  },
  {
    "er_leave_status_id": 6,
    "er_leave_status_name": "กลับบ้าน"
  }
]
```
