# `dtmain_report`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| dtmain_report_id | int(11) | NO | PRI | 0 |  |  |
| dtmain_id | int(11) | YES | MUL | NULL |  |  |
| dttm_dw_report_group_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_dtmain_id | dtmain_id | no | 1 |
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | dtmain_report_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "dtmain_report_id": 1,
    "dtmain_id": 13724,
    "dttm_dw_report_group_id": 3,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "dtmain_report_id": 2,
    "dtmain_id": 13725,
    "dttm_dw_report_group_id": 13,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "dtmain_report_id": 3,
    "dtmain_id": 13711,
    "dttm_dw_report_group_id": 3,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "dtmain_report_id": 4,
    "dtmain_id": 13712,
    "dttm_dw_report_group_id": 11,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "dtmain_report_id": 5,
    "dtmain_id": 13713,
    "dttm_dw_report_group_id": 12,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "dtmain_report_id": 6,
    "dtmain_id": 13714,
    "dttm_dw_report_group_id": 12,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "dtmain_report_id": 7,
    "dtmain_id": 32280,
    "dttm_dw_report_group_id": 12,
    "hos_guid": null,
    "hospcode": null
  },
  {
    "dtmain_report_id": 8,
    "dtmain_id": 32281,
    "dttm_dw_report_group_id": 12,
    "hos_guid": null,
    "hospcode": null
  }
]
```
