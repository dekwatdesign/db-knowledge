# `opdcard_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| opdcard_location_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| confirm_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(30) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | opdcard_location_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "opdcard_location_id": 1,
    "hn": "000028267",
    "confirm_datetime": "2009-02-21 19:56:43",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  },
  {
    "opdcard_location_id": 2,
    "hn": "000033167",
    "confirm_datetime": "2009-02-22 09:39:38",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  },
  {
    "opdcard_location_id": 3,
    "hn": "000006931",
    "confirm_datetime": "2009-02-22 09:40:43",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  },
  {
    "opdcard_location_id": 4,
    "hn": "000011727",
    "confirm_datetime": "2009-02-22 09:43:49",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  },
  {
    "opdcard_location_id": 5,
    "hn": "000007435",
    "confirm_datetime": "2009-02-22 09:44:48",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  },
  {
    "opdcard_location_id": 6,
    "hn": "000033168",
    "confirm_datetime": "2009-02-22 09:46:02",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  },
  {
    "opdcard_location_id": 7,
    "hn": "000024941",
    "confirm_datetime": "2009-02-22 09:48:02",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  },
  {
    "opdcard_location_id": 8,
    "hn": "000031254",
    "confirm_datetime": "2009-02-22 09:49:04",
    "staff": "[MASKED_FULLNAME]",
    "depcode": "002",
    "hos_guid": null
  }
]
```
