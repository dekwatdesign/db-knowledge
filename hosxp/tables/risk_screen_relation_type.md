# `risk_screen_relation_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| risk_screen_relation_type_id | int(11) | NO | PRI | 0 |  |  |
| risk_screen_relation_name | varchar(255) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | risk_screen_relation_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "risk_screen_relation_type_id": 10,
    "risk_screen_relation_name": "1.1 บิดาหรือมารดาของท่านมีประวัติการเจ็บป่วยด้วย",
    "hos_guid": null
  },
  {
    "risk_screen_relation_type_id": 20,
    "risk_screen_relation_name": "1.2 พี่น้อง (สายตรง) ของท่านมีประวัติการเจ็บป่วยด้วยโรค",
    "hos_guid": null
  }
]
```
