# `rx_audit`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| audit_text | longtext | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "vn": "541005183503",
    "audit_text": "05/10/54 20:52:07 [bms,999] Change from (1000122) Paracetamol 500 mg เม็ด x 10 --> (1000122) Paracetamol 500 mg เม็ด x 10\r\n",
    "hos_guid": null
  },
  {
    "vn": "541007091925",
    "audit_text": "07/10/54 09:54:48 [yuwa027,087] Change from (1000099) Concerta (Methylphenidate SR) 36 mg เม็ด 11pt ช(1 เม็ด*1 PCเช้า) รับประทาน ครั้งละ    1 x 120 --> (1000099) Concerta (Methylphenidate SR) 36 mg เม็ด x 120\r\n07/10/54 09:55:17 [yuwa027,087] Change from (1000016) ABILIFY (Aripiprazole) 15 mg เม็ด 11pt ช(1 เม็ด*1 PCเช้า) รับประทาน ครั้งละ    1 x 30 --> (1000016) ABILIFY (Aripiprazole) 15 mg เม็ด x 30\r\n07/10/54 10:37:35 [yuwa027,087] Change from (1000159) Depakine Chrono 500 mg เม็ด 11pt ช (1 เม็ดODเช้า) รับประทาน ครั้งละ    1     เ x 60 --> (1000159) Depakine Chrono 500 mg เม็ด x 60\r\n07/10/54 10:38:59 [yuwa027,087] Change from (1000156) Encorate Chrono 200 mg เม็ด 11pt ย( 1 เม็ด เย็น)11pt2 รับประทานครั้งละ 1 เม็ด x 60 --> (1000156) Encorate Chrono 200 mg เม็ด x 60\r\n",
    "hos_guid": null
  },
  {
    "vn": "541010060036",
    "audit_text": "10/10/54 10:42:29 [yuwa027,087] Change from (1000149) RISPERDAL soln 1 mg/ml ขวด (30 ml.) >0.5 มิลลิกรัม หลังอาหาร เช้า และ 0.6 มิลลิกรัม ก่อนนอน ........................................ x 2 --> (1000149) RISPERDAL soln 1 mg/ml ขวด (30 ml.) x 2\r\n",
    "hos_guid": null
  },
  {
    "vn": "541010060048",
    "audit_text": "14/10/54 10:29:58 [yuwa027,087] Change from (1000143) Risperidone GPO 1 mg เม็ด >ครึ่งเม็ด หลังอาหาร เช้า  และ 1 เม็ด ก่อนนอน x 300 --> (1540001) Risperdal  Quicklet 2 mg. เม็ด x 300\r\n",
    "hos_guid": null
  },
  {
    "vn": "541011060024",
    "audit_text": "11/10/54 12:00:51 [yuwa027,087] Change from (1000063) Benadryl 25 mg เม็ด x 180 --> (1000063) Benadryl 25 mg เม็ด x 180\r\n",
    "hos_guid": null
  },
  {
    "vn": "541011135156",
    "audit_text": "12/10/54 11:16:34 [bms,999] Delete : ค่าทำบัตรผู้ป่วยใหม่ x 1\r\n12/10/54 11:16:39 [bms,999] Delete : ค่าบริการผู้ป่วยนอก ในเวลาราชการ x 1\r\n",
    "hos_guid": null
  },
  {
    "vn": "541011152402",
    "audit_text": "11/10/54 16:11:17 [yuwa027,087] Change from (1000162) Melleril  (Thioridazine) 100 mg เม็ด 11ht (1 เม็ด HS) รับประทาน ครั้งละ   1    เม็ด x 120 --> (1000164) Melleril (Thioridazine) 50 mg เม็ด x 120\r\n",
    "hos_guid": null
  },
  {
    "vn": "541012060037",
    "audit_text": "12/10/54 12:44:35 [yuwa024,084] Change from (1000149) RISPERDAL soln 1 mg/ml ขวด (30 ml.) .25hm(0.25 mg hs)0.25 มิลลิกรัม ก่อนนอน x 3 --> (1000149) RISPERDAL soln 1 mg/ml ขวด (30 ml.) x 3\r\n",
    "hos_guid": null
  }
]
```
