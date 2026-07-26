# `opi_acpc`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opi_acpc_id | int(11) | NO | PRI | 0 |  |  |
| opi_acpc_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_opi_acpc_name | opi_acpc_name | yes | 1 |
| PRIMARY | opi_acpc_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "opi_acpc_id": 1,
    "opi_acpc_name": "ก่อนอาหาร",
    "hos_guid": "{86954D8D-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  },
  {
    "opi_acpc_id": 2,
    "opi_acpc_name": "หลังอาหาร",
    "hos_guid": "{8695579D-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  },
  {
    "opi_acpc_id": 3,
    "opi_acpc_name": "ไม่ระบุ",
    "hos_guid": "{86955A86-E5DA-11DF-BBCF-F3CA1C2D0000}",
    "hospcode": null
  }
]
```
