# `wbc_breast_feed_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| wbc_breast_feed_type_id | int(11) | NO | PRI | 0 |  |  |
| wbc_breast_feed_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_wbc_breast_feed_type_name | wbc_breast_feed_type_name | yes | 1 |
| PRIMARY | wbc_breast_feed_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "wbc_breast_feed_type_id": 1,
    "wbc_breast_feed_type_name": "1 เดือน",
    "hos_guid": null
  },
  {
    "wbc_breast_feed_type_id": 2,
    "wbc_breast_feed_type_name": "2 เดือน",
    "hos_guid": null
  },
  {
    "wbc_breast_feed_type_id": 3,
    "wbc_breast_feed_type_name": "3 เดือน",
    "hos_guid": null
  },
  {
    "wbc_breast_feed_type_id": 4,
    "wbc_breast_feed_type_name": "4 เดือน",
    "hos_guid": null
  },
  {
    "wbc_breast_feed_type_id": 5,
    "wbc_breast_feed_type_name": "5 เดือน",
    "hos_guid": null
  },
  {
    "wbc_breast_feed_type_id": 6,
    "wbc_breast_feed_type_name": "6 เดือน",
    "hos_guid": null
  },
  {
    "wbc_breast_feed_type_id": 7,
    "wbc_breast_feed_type_name": "มากกว่า 6 เดือน",
    "hos_guid": null
  }
]
```
