# `breast_feed_status`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| breast_feed_status_id | int(11) | NO | PRI | 0 |  |  |
| breast_feed_status_name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | breast_feed_status_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "breast_feed_status_id": 1,
    "breast_feed_status_name": "ไม่ดื่มนมแม่",
    "hos_guid": null
  },
  {
    "breast_feed_status_id": 2,
    "breast_feed_status_name": "ดื่มนมแม่ 3 เดือน",
    "hos_guid": null
  },
  {
    "breast_feed_status_id": 3,
    "breast_feed_status_name": "ดื่มนมแม่ 4 เดือน",
    "hos_guid": null
  },
  {
    "breast_feed_status_id": 4,
    "breast_feed_status_name": "ดื่มนมแม่ 6 เดือน",
    "hos_guid": null
  }
]
```
