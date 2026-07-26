# `patient_rx_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| rx_note | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| staff | varchar(20) | YES |  | NULL |  |  |
| note_datetime | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "hn": "",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": "[MASKED_FULLNAME]",
    "note_datetime": "2026-07-23 08:41:47"
  },
  {
    "hn": "000000266",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": null,
    "note_datetime": null
  },
  {
    "hn": "000000733",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": null,
    "note_datetime": null
  },
  {
    "hn": "000000804",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": null,
    "note_datetime": null
  },
  {
    "hn": "000000863",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": null,
    "note_datetime": null
  },
  {
    "hn": "000001606",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": null,
    "note_datetime": null
  },
  {
    "hn": "000001767",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": null,
    "note_datetime": null
  },
  {
    "hn": "000002406",
    "rx_note": null,
    "hos_guid": null,
    "hos_guid_ext": null,
    "vn": null,
    "staff": null,
    "note_datetime": null
  }
]
```
