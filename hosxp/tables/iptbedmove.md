# `iptbedmove`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| iptbedmove_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| movedate | date | YES |  | NULL |  |  |
| movereason | varchar(250) | YES |  | NULL |  |  |
| movetime | time | YES |  | NULL |  |  |
| nbedno | varchar(9) | YES |  | NULL |  |  |
| nward | varchar(9) | YES |  | NULL |  |  |
| obedno | varchar(9) | YES |  | NULL |  |  |
| oward | varchar(9) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| entry_datetime | datetime | YES |  | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| nroomno | varchar(10) | YES |  | NULL |  |  |
| spclty | char(2) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | iptbedmove_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "iptbedmove_id": 1,
    "an": "550001318",
    "movedate": "2012-11-20",
    "movereason": "it",
    "movetime": "13:35:00",
    "nbedno": "ก502",
    "nward": "04",
    "obedno": "ธ502",
    "oward": "04",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  },
  {
    "iptbedmove_id": 2,
    "an": "550001318",
    "movedate": "2012-11-20",
    "movereason": "รับใหม่",
    "movetime": "13:31:00",
    "nbedno": "ธ511",
    "nward": "04",
    "obedno": "ก502",
    "oward": "04",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  },
  {
    "iptbedmove_id": 21954,
    "an": "560001091",
    "movedate": "2013-09-03",
    "movereason": "เดิม Admit IPD 5 ต้องจำหน่ายผู้ป่วย ก่อน admit IPD4",
    "movetime": "8:30:00",
    "nbedno": "ธ502",
    "nward": "04",
    "obedno": "ก502",
    "oward": "03",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  },
  {
    "iptbedmove_id": 21955,
    "an": "570001103",
    "movedate": "2014-07-04",
    "movereason": "บันทึกผิดเตียง",
    "movetime": "9:26:00",
    "nbedno": "ก411",
    "nward": "03",
    "obedno": "ก264",
    "oward": "01",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  },
  {
    "iptbedmove_id": 21956,
    "an": "570001567",
    "movedate": "2014-09-29",
    "movereason": "admit ผิดตึก",
    "movetime": "14:30:00",
    "nbedno": "ก437",
    "nward": "03",
    "obedno": "ธ305",
    "oward": "02",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  },
  {
    "iptbedmove_id": 21957,
    "an": "580000037",
    "movedate": "2015-01-13",
    "movereason": "มีพฤติกรรมก้าวร้าว, ใช้ความรุนแรง",
    "movetime": "16:00:00",
    "nbedno": "ธ503",
    "nward": "04",
    "obedno": "ก439",
    "oward": "03",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  },
  {
    "iptbedmove_id": 21958,
    "an": "580000507",
    "movedate": "2015-07-18",
    "movereason": "อาละวาด, ทำร้ายร่างกาย, ทำลายของ",
    "movetime": "8:30:00",
    "nbedno": "ธ501",
    "nward": "04",
    "obedno": "ก305",
    "oward": "02",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  },
  {
    "iptbedmove_id": 21959,
    "an": "580000516",
    "movedate": "2015-07-18",
    "movereason": "อาละวาด ทำลายข้าวของ ทำร้ายร่างกาย",
    "movetime": "8:30:00",
    "nbedno": "ธ502",
    "nward": "04",
    "obedno": "ก316",
    "oward": "04",
    "hos_guid": null,
    "entry_datetime": null,
    "staff": null,
    "nroomno": null,
    "spclty": null
  }
]
```
