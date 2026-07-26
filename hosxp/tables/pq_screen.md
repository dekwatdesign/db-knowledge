# `pq_screen`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| screen_date | date | YES |  | NULL |  |  |
| screen_time | time | YES |  | NULL |  |  |
| staff | varchar(25) | YES | MUL | NULL |  |  |
| next_dep | char(3) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| next_dep | next_dep | no | 1 |
| PRIMARY | vn | yes | 1 |
| staff | staff | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-22",
    "screen_time": "14:50:24",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "999",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-25",
    "screen_time": "18:45:57",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "999",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-25",
    "screen_time": "15:33:42",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "999",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-20",
    "screen_time": "18:55:23",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "999",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-21",
    "screen_time": "13:54:46",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "999",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-11",
    "screen_time": "16:53:13",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "013",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-25",
    "screen_time": "14:45:20",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "999",
    "hos_guid": null
  },
  {
    "vn": "1xxxxxxxxxxxx",
    "screen_date": "2011-10-12",
    "screen_time": "19:04:56",
    "staff": "[MASKED_FULLNAME]",
    "next_dep": "013",
    "hos_guid": null
  }
]
```
