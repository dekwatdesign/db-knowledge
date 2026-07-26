# `psy_register_trace_issue`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psy_register_trace_issue_id | int(11) | NO | PRI | 0 |  |  |
| psy_register_trace_issue_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | psy_register_trace_issue_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "psy_register_trace_issue_id": 1,
    "psy_register_trace_issue_name": "ขาดยา",
    "hos_guid": null
  },
  {
    "psy_register_trace_issue_id": 2,
    "psy_register_trace_issue_name": "มีความวุ่นวาย",
    "hos_guid": null
  },
  {
    "psy_register_trace_issue_id": 3,
    "psy_register_trace_issue_name": "ทำลายข้าวของ",
    "hos_guid": null
  }
]
```
