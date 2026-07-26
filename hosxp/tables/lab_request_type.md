# `lab_request_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lab_request_type_id | int(11) | NO | PRI | 0 |  |  |
| lab_request_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_lab_request_type_name | lab_request_type_name | yes | 1 |
| PRIMARY | lab_request_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "lab_request_type_id": 1,
    "lab_request_type_name": "Request จากระบบ HOSxP"
  },
  {
    "lab_request_type_id": 2,
    "lab_request_type_name": "Request จาก Cloud"
  },
  {
    "lab_request_type_id": 3,
    "lab_request_type_name": "Request จากระบบนัดหมาย"
  }
]
```
