# `er_accident_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_accident_type_id | int(11) | NO | PRI | 0 |  |  |
| er_accident_type_name | varchar(250) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_accident_type_name | er_accident_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_accident_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "er_accident_type_id": 1,
    "er_accident_type_name": "อุบัติเหตุการขนส่ง (V01-V89)",
    "hos_guid": null
  },
  {
    "er_accident_type_id": 2,
    "er_accident_type_name": "พลัด ตก หรือหกล้ม (W00-W19)",
    "hos_guid": null
  },
  {
    "er_accident_type_id": 3,
    "er_accident_type_name": "สัมผัสกับแรงเชิงกลวัตถุสิ่งของ (W20-W49)",
    "hos_guid": null
  },
  {
    "er_accident_type_id": 4,
    "er_accident_type_name": "สัมผัสกับแรงเชิงกลของสัตว์/คน (W50-W64)",
    "hos_guid": null
  },
  {
    "er_accident_type_id": 5,
    "er_accident_type_name": "การตกน้ำ จมน้ำ (W65-W74)",
    "hos_guid": null
  },
  {
    "er_accident_type_id": 6,
    "er_accident_type_name": "คุกคามการหายใจ (W75-W84)",
    "hos_guid": null
  },
  {
    "er_accident_type_id": 7,
    "er_accident_type_name": "สัมผัสกระแสไฟฟ้า รังสีและอุณหภูมิ (W85-W99)",
    "hos_guid": null
  },
  {
    "er_accident_type_id": 8,
    "er_accident_type_name": "สัมผัสควันไฟ และเปลวไฟ (X00-X99)",
    "hos_guid": null
  }
]
```
