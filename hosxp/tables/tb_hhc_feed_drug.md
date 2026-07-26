# `tb_hhc_feed_drug`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_feed_drug_id | int(11) | NO | PRI | 0 |  |  |
| tb_hhc_feed_drug_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_feed_drug_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "tb_hhc_feed_drug_id": 1,
    "tb_hhc_feed_drug_name": "ถูกต้อง",
    "hos_guid": null
  },
  {
    "tb_hhc_feed_drug_id": 2,
    "tb_hhc_feed_drug_name": "ไม่ถูกต้อง",
    "hos_guid": null
  }
]
```
