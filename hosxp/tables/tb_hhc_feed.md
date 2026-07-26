# `tb_hhc_feed`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| tb_hhc_feed_id | int(11) | NO | PRI | 0 |  |  |
| tb_hhc_feed_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | tb_hhc_feed_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "tb_hhc_feed_id": 1,
    "tb_hhc_feed_name": "กินได้ดี",
    "hos_guid": null
  },
  {
    "tb_hhc_feed_id": 2,
    "tb_hhc_feed_name": "กินได้น้อย",
    "hos_guid": null
  },
  {
    "tb_hhc_feed_id": 3,
    "tb_hhc_feed_name": "กินไม่ได้",
    "hos_guid": null
  }
]
```
