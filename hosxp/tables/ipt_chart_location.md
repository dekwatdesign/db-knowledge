# `ipt_chart_location`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| an | varchar(9) | NO | PRI |  |  |  |
| hospital_location_id | int(11) | YES |  | NULL |  |  |
| depcode | varchar(3) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| chart_note | text | YES |  | NULL |  |  |
| staff | varchar(30) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| chart_date | date | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_chart_date | chart_date | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | an | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "an": "540000786",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  },
  {
    "an": "540000787",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  },
  {
    "an": "540000788",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  },
  {
    "an": "540000789",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  },
  {
    "an": "540000791",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  },
  {
    "an": "540000792",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  },
  {
    "an": "540000793",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  },
  {
    "an": "540000794",
    "hospital_location_id": 98,
    "depcode": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "chart_note": null,
    "staff": null,
    "update_datetime": null,
    "chart_date": null
  }
]
```
