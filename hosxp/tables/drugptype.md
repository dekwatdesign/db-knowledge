# `drugptype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ptype | char(2) | YES | UNI | NULL |  |  |
| ptypename | varchar(75) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ptype_unique | ptype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "ptype": "01",
    "ptypename": "จ่ายห้องยา",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ptype": "02",
    "ptypename": "คืนเวชภัณฑ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ptype": "03",
    "ptypename": "ยืมเวชภัณฑ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ptype": "04",
    "ptypename": "แลกเปลี่ยนเวชภัณฑ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ptype": "05",
    "ptypename": "เบิกทำลาย",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ptype": "06",
    "ptypename": "เบิกจ่าย สอ.",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "ptype": "99",
    "ptypename": "ปรับยอด",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
