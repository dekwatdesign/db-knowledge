# `ipt_against_advice`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| against_advice_text | varchar(250) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "000000303",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "000000337",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "000000343",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "000000344",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "000000354",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "000000363",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "000000364",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "an": "000000365",
    "against_advice_text": "",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
