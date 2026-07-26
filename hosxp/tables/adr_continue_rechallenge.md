# `adr_continue_rechallenge`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| adr_continue_rechallenge_id | int(11) | NO | PRI | 0 |  |  |
| adr_continue_rechallenge_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_adr_continue_rechallenge_name | adr_continue_rechallenge_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | adr_continue_rechallenge_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "adr_continue_rechallenge_id": 1,
    "adr_continue_rechallenge_name": "ใช้ต่อในขนาดเดิม",
    "hos_guid": null
  },
  {
    "adr_continue_rechallenge_id": 2,
    "adr_continue_rechallenge_name": "ใช้ต่อแต่ลดขนาดลง",
    "hos_guid": null
  }
]
```
