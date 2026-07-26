# `dt_case_request_await_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dt_case_request_await_type_id | int(11) | NO | PRI | 0 |  |  |
| dt_case_request_await_type_name | varchar(250) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | dt_case_request_await_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "dt_case_request_await_type_id": 1,
    "dt_case_request_await_type_name": "รอทัตแพทย์ เจ้าของเคส"
  },
  {
    "dt_case_request_await_type_id": 2,
    "dt_case_request_await_type_name": "รอนัด Recall"
  },
  {
    "dt_case_request_await_type_id": 3,
    "dt_case_request_await_type_name": "นัดแล้ว"
  }
]
```
