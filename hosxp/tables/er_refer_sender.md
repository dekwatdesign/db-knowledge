# `er_refer_sender`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_refer_sender_id | int(11) | NO | PRI | 0 |  |  |
| er_refer_sender_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_refer_sender_name | er_refer_sender_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_refer_sender_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "er_refer_sender_id": 1,
    "er_refer_sender_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "er_refer_sender_id": 2,
    "er_refer_sender_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "er_refer_sender_id": 3,
    "er_refer_sender_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "er_refer_sender_id": 4,
    "er_refer_sender_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "er_refer_sender_id": 5,
    "er_refer_sender_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "er_refer_sender_id": 6,
    "er_refer_sender_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  },
  {
    "er_refer_sender_id": 7,
    "er_refer_sender_name": "[MASKED_FULLNAME]",
    "hos_guid": null
  }
]
```
