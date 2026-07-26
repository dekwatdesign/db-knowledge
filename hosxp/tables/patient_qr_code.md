# `patient_qr_code`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | NO | PRI |  |  |  |
| qr_code_blob | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | hn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "hn": "530161154",
    "qr_code_blob": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "530177453",
    "qr_code_blob": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "550002161",
    "qr_code_blob": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "630000370",
    "qr_code_blob": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "hn": "660000010",
    "qr_code_blob": "[MASKED_AVATAR]",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
