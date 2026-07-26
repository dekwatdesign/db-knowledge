# `drugminptype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| minptype | char(2) | YES | UNI | NULL |  |  |
| name | varchar(100) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| minptype_unique | minptype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "minptype": "01",
    "name": "รับจากบริษัท",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "minptype": "02",
    "name": "รับเวชภัณฑ์สนับสนุน",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "minptype": "03",
    "name": "รับคืนเวชภัณฑ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "minptype": "04",
    "name": "ยืมเวชภัณฑ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "minptype": "05",
    "name": "รับจาก GPO",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "minptype": "06",
    "name": "รับแลกเปลี่ยนเวชภัณฑ์",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "minptype": "99",
    "name": "ปรับยอดคงเหลือ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
