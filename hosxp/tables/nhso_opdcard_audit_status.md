# `nhso_opdcard_audit_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_opdcard_audit_status_id | int(11) | NO | PRI | 0 |  |  |
| nhso_opdcard_audit_status_name | varchar(50) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | nhso_opdcard_audit_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "nhso_opdcard_audit_status_id": 1,
    "nhso_opdcard_audit_status_name": "รอดำเนินการ"
  },
  {
    "nhso_opdcard_audit_status_id": 2,
    "nhso_opdcard_audit_status_name": "ดำเนินการแล้ว"
  }
]
```
