# `dt_case_req_approve_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_req_approve_type_id | int(11) | NO | PRI | 0 |  |  |
| approve_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_case_req_approve_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "dt_case_req_approve_type_id": 1,
    "approve_type_name": "ขอเคสรักษา"
  },
  {
    "dt_case_req_approve_type_id": 2,
    "approve_type_name": "โอนเคสรักษา"
  }
]
```
