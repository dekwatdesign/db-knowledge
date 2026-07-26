# `universal_detail`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| universal_detail_id | int(11) | NO | PRI | 0 |  |  |
| universal_head_id | int(11) | YES | MUL | NULL |  |  |
| universal_item_id | int(11) | YES |  | NULL |  |  |
| universal_item_value_text | varchar(250) | YES |  | NULL |  |  |
| universal_item_value_int | int(11) | YES |  | NULL |  |  |
| universal_item_value_date | date | YES |  | NULL |  |  |
| universal_item_value_float | double(15,3) | YES |  | NULL |  |  |
| universal_item_value_memo | text | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_universal_head_id | universal_head_id | no | 1 |
| PRIMARY | universal_detail_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "universal_detail_id": 108,
    "universal_head_id": 107,
    "universal_item_id": 53,
    "universal_item_value_text": "1",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  },
  {
    "universal_detail_id": 109,
    "universal_head_id": 107,
    "universal_item_id": 51,
    "universal_item_value_text": "0189",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  },
  {
    "universal_detail_id": 110,
    "universal_head_id": 107,
    "universal_item_id": 50,
    "universal_item_value_text": "ooooooooooooooooooooooo",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  },
  {
    "universal_detail_id": 111,
    "universal_head_id": 107,
    "universal_item_id": 49,
    "universal_item_value_text": "nnnnnnnnnnnnnnnnnn",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  },
  {
    "universal_detail_id": 112,
    "universal_head_id": 107,
    "universal_item_id": 48,
    "universal_item_value_text": "mmmmmmmmmmmmmmmmmm",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  },
  {
    "universal_detail_id": 113,
    "universal_head_id": 107,
    "universal_item_id": 47,
    "universal_item_value_text": "kkkkkkkkkkkkkkkkkkkk",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  },
  {
    "universal_detail_id": 114,
    "universal_head_id": 107,
    "universal_item_id": 46,
    "universal_item_value_text": "iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  },
  {
    "universal_detail_id": 115,
    "universal_head_id": 107,
    "universal_item_id": 45,
    "universal_item_value_text": "้้้้้้้้้้้hhhhhhhhhhhhhhhh",
    "universal_item_value_int": null,
    "universal_item_value_date": null,
    "universal_item_value_float": null,
    "universal_item_value_memo": null,
    "hos_guid": null
  }
]
```
