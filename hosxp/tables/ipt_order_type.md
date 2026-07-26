# `ipt_order_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| order_type | char(3) | NO | PRI |  |  |  |
| order_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_order_type_name | order_type_name | yes | 1 |
| PRIMARY | order_type | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (7)

```json
[
  {
    "order_type": "ATO",
    "order_type_name": "รายการอัตโนมัติ",
    "hos_guid": "{B1B0F0F1-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "order_type": "BCH",
    "order_type_name": "รายการสั่งทั้งตึก",
    "hos_guid": "{B1B0F814-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "order_type": "CRx",
    "order_type_name": "รายการแก้ไขจาก Finance",
    "hos_guid": "{B1B0FD17-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "order_type": "EMx",
    "order_type_name": "รายการแก้ไขจากจุดอื่น",
    "hos_guid": "{B1B101EC-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "order_type": "HMe",
    "order_type_name": "ยากลับบ้าน",
    "hos_guid": "{B1B106AC-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "order_type": "IRx",
    "order_type_name": "ใบสั่งยาผู้ป่วยใน",
    "hos_guid": "{B1B10BC9-E5D9-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "order_type": "TRx",
    "order_type_name": "ยาโอนจาก OPD",
    "hos_guid": "{B1B110B3-E5D9-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
