# `oapp_week_day`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_week_day_id | int(11) | NO | PRI | 0 |  |  |
| oapp_week_day_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_oapp_week_day_name | oapp_week_day_name | yes | 1 |
| PRIMARY | oapp_week_day_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "oapp_week_day_id": 1,
    "oapp_week_day_name": "จันทร์",
    "hos_guid": null
  },
  {
    "oapp_week_day_id": 2,
    "oapp_week_day_name": "อังคาร",
    "hos_guid": null
  },
  {
    "oapp_week_day_id": 3,
    "oapp_week_day_name": "พุธ",
    "hos_guid": null
  },
  {
    "oapp_week_day_id": 4,
    "oapp_week_day_name": "พฤหัสบดี",
    "hos_guid": null
  },
  {
    "oapp_week_day_id": 5,
    "oapp_week_day_name": "ศุกร์",
    "hos_guid": null
  },
  {
    "oapp_week_day_id": 6,
    "oapp_week_day_name": "เสาร์",
    "hos_guid": null
  },
  {
    "oapp_week_day_id": 7,
    "oapp_week_day_name": "อาทิตย์",
    "hos_guid": null
  }
]
```
