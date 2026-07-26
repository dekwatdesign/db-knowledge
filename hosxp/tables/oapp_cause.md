# `oapp_cause`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(250) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| display_order | int(11) | YES |  | NULL |  |  |
| no_qs_slot | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "name": "Change for Child",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  },
  {
    "name": "Counseling",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  },
  {
    "name": "EEG",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  },
  {
    "name": "Family Therapy",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  },
  {
    "name": "HEG",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  },
  {
    "name": "Indiridual Psychotherapy",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  },
  {
    "name": "IPD2 - กลุ่มผู้ปกครองเข้าร่วมบำบัด L2L (ไม่เกิน 6 ปี)",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  },
  {
    "name": "IPD2 - กลุ่มผู้ปกครองเข้าร่วมบำบัด L3 เตาะแตะ (ไม่เกิน 6 ปี)",
    "hos_guid": null,
    "hos_guid_ext": null,
    "display_order": null,
    "no_qs_slot": null
  }
]
```
