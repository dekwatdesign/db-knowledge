# `ipt_dx_text`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_dx_text_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | UNI | NULL |  |  |
| pre_dx_text | text | YES |  | NULL |  |  |
| post_dx_text | text | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_dx_text_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "ipt_dx_text_id": 1,
    "an": "540001091",
    "pre_dx_text": null,
    "post_dx_text": "schoolrefusal anxity",
    "hos_guid": null
  },
  {
    "ipt_dx_text_id": 2,
    "an": "540001134",
    "pre_dx_text": null,
    "post_dx_text": "12345",
    "hos_guid": null
  }
]
```
