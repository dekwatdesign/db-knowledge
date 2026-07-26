# `labour_pregnancy_position`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pregnancy_position_id | int(11) | NO | PRI | 0 |  |  |
| pregnancy_position_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_pregnancy_position_name | pregnancy_position_name | yes | 1 |
| PRIMARY | pregnancy_position_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "pregnancy_position_id": 1,
    "pregnancy_position_name": "LOA",
    "hos_guid": "{1CA3B839-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "pregnancy_position_id": 2,
    "pregnancy_position_name": "ROA",
    "hos_guid": "{1CA3BF42-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "pregnancy_position_id": 3,
    "pregnancy_position_name": "LSA",
    "hos_guid": "{1CA3C436-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "pregnancy_position_id": 4,
    "pregnancy_position_name": "RSA",
    "hos_guid": "{1CA3C925-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "pregnancy_position_id": 5,
    "pregnancy_position_name": "TRANSRERSE",
    "hos_guid": "{1CA3CDCC-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
