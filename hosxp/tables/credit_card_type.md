# `credit_card_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| credit_card_id | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| card_picture | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | credit_card_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "credit_card_id": 1,
    "name": "VISA",
    "card_picture": "[MASKED_AVATAR]",
    "hos_guid": null
  },
  {
    "credit_card_id": 2,
    "name": "MasterCard",
    "card_picture": "[MASKED_AVATAR]",
    "hos_guid": null
  },
  {
    "credit_card_id": 3,
    "name": "citibank",
    "card_picture": "[MASKED_AVATAR]",
    "hos_guid": null
  },
  {
    "credit_card_id": 4,
    "name": "Diners Club",
    "card_picture": "[MASKED_AVATAR]",
    "hos_guid": null
  }
]
```
