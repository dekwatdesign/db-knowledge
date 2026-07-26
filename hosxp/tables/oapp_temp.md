# `oapp_temp`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| oapp_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| vstdate | date | YES | MUL | NULL |  |  |
| nextdate | date | YES | MUL | NULL |  |  |
| nexttime | time | YES |  | NULL |  |  |
| clinic | char(3) | YES |  | NULL |  |  |
| depcode | char(3) | YES |  | NULL |  |  |
| doctor | varchar(6) | YES | MUL | NULL |  |  |
| note | varchar(200) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |
| app_user | varchar(150) | YES |  | NULL |  |  |
| app_cause | varchar(250) | YES |  | NULL |  |  |
| contact_point | varchar(250) | YES |  | NULL |  |  |
| note1 | text | YES |  | NULL |  |  |
| note2 | text | YES |  | NULL |  |  |
| app_no | tinyint(4) | YES |  | NULL |  |  |
| print_sticker | char(1) | YES |  | NULL |  |  |
| enddate | date | YES |  | NULL |  |  |
| endtime | time | YES |  | NULL |  |  |
| label_color | int(11) | YES |  | NULL |  |  |
| doctor_schedule_id | int(11) | YES |  | NULL |  |  |
| ward | varchar(4) | YES |  | NULL |  |  |
| patient_visit | char(1) | YES |  | NULL |  |  |
| nexttime_end | time | YES |  | NULL |  |  |
| next_pttype | char(2) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor | doctor | no | 1 |
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_nextdate | nextdate | no | 1 |
| ix_vh | vstdate | no | 1 |
| ix_vh | hn | no | 2 |
| ix_vh_index | hn | no | 1 |
| ix_vh_index | vstdate | no | 2 |
| ix_vn | vn | no | 1 |
| ix_vstdate | vstdate | no | 1 |
| PRIMARY | oapp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "oapp_id": 1,
    "hn": "530085654",
    "vn": "1xxxxxxxxxxxx",
    "vstdate": "2011-08-11",
    "nextdate": "1990-01-01",
    "nexttime": "9:30:00",
    "clinic": "011",
    "depcode": "026",
    "doctor": "",
    "note": "",
    "spclty": "",
    "app_user": "[MASKED_FULLNAME]",
    "app_cause": "",
    "contact_point": "ห้องบัตร",
    "note1": null,
    "note2": null,
    "app_no": 1,
    "print_sticker": null,
    "enddate": null,
    "endtime": null,
    "label_color": null,
    "doctor_schedule_id": 0,
    "ward": null,
    "patient_visit": null,
    "nexttime_end": "10:30:00",
    "next_pttype": "10",
    "hos_guid": null
  }
]
```
