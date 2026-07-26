# `ovst_sks_dispense_item`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ovst_sks_dispense_item_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(50) | YES | MUL | NULL |  |  |
| dispense_id | varchar(25) | YES |  | NULL |  |  |
| product_category | varchar(1) | YES |  | NULL |  |  |
| hospital_drug_id | varchar(50) | YES |  | NULL |  |  |
| drug_id | varchar(15) | YES |  | NULL |  |  |
| dfs_code | varchar(100) | YES |  | NULL |  |  |
| dfs_text | varchar(250) | YES |  | NULL |  |  |
| pack_size | varchar(150) | YES |  | NULL |  |  |
| sig_code | varchar(250) | YES |  | NULL |  |  |
| sig_text | varchar(250) | YES |  | NULL |  |  |
| quantity | int(11) | YES |  | NULL |  |  |
| unit_price | double(15,3) | YES |  | NULL |  |  |
| charge_amount | double(15,3) | YES |  | NULL |  |  |
| reimb_price | double(15,3) | YES |  | NULL |  |  |
| product_selection_code | char(1) | YES |  | NULL |  |  |
| refill | char(1) | YES |  | NULL |  |  |
| claim_control | varchar(2) | YES |  | NULL |  |  |
| claim_category | varchar(3) | YES |  | NULL |  |  |
| opi_guid | varchar(38) | YES |  | NULL |  |  |
| reimb_amount | double(15,3) | YES |  | NULL |  |  |
| multiple_dispense | varchar(7) | YES |  | NULL |  |  |
| supply_for | varchar(10) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_vn | vn | no | 1 |
| PRIMARY | ovst_sks_dispense_item_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ovst_sks_dispense_item_id": 5809,
    "vn": "610710080658:231251",
    "dispense_id": "000678498",
    "product_category": "1",
    "hospital_drug_id": "1000097",
    "drug_id": "431051",
    "dfs_code": "",
    "dfs_text": "Methylphenidate(RITALIN:ริตาลิน) TABLETS 10 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000405:0000000",
    "sig_text": "รับประทานครั้งละ ครึ่ง เม็ด  วันละ 2 เวลา หลังอาหาร เช้า เที่ยง",
    "quantity": 30,
    "unit_price": 6.0,
    "charge_amount": 180.0,
    "reimb_price": 6.0,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{EACC4A07-25BB-4532-BD84-D44F466D4259}",
    "reimb_amount": 180.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sks_dispense_item_id": 237248,
    "vn": "651102082021:371364",
    "dispense_id": "000950183",
    "product_category": "1",
    "hospital_drug_id": "1640034",
    "drug_id": "300769",
    "dfs_code": "",
    "dfs_text": "Acetylcysteine (CYSTALINE)(NAC LONG)",
    "pack_size": "เม็ด",
    "sig_code": "0000870:0000000",
    "sig_text": "รับประทานครั้งละ 1 เม็ด ละลายน้ำครึ่ง แก้ว วันละ 1 ครั้ง ก่อนอาหารเย็น",
    "quantity": 10,
    "unit_price": 11.0,
    "charge_amount": 110.0,
    "reimb_price": 11.0,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "",
    "claim_category": null,
    "opi_guid": "{B15EFCAF-2C1B-4983-970B-8EB42F1B99BD}",
    "reimb_amount": 110.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sks_dispense_item_id": 237250,
    "vn": "651102082033:371365",
    "dispense_id": "000950184",
    "product_category": "1",
    "hospital_drug_id": "1640034",
    "drug_id": "300769",
    "dfs_code": "",
    "dfs_text": "Acetylcysteine (CYSTALINE)(NAC LONG)",
    "pack_size": "เม็ด",
    "sig_code": "0000870:0000000",
    "sig_text": "รับประทานครั้งละ 1 เม็ด ละลายน้ำครึ่ง แก้ว วันละ 1 ครั้ง ก่อนอาหารเย็น",
    "quantity": 10,
    "unit_price": 11.0,
    "charge_amount": 110.0,
    "reimb_price": 11.0,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "",
    "claim_category": null,
    "opi_guid": "{2CDAA473-AA5B-41F5-82C4-D4345ECD8409}",
    "reimb_amount": 110.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sks_dispense_item_id": 237249,
    "vn": "651102082021:371364",
    "dispense_id": "000950183",
    "product_category": "1",
    "hospital_drug_id": "1000065",
    "drug_id": "784293",
    "dfs_code": "",
    "dfs_text": "Domperidone (Domp-M) (Motilium) TABLETS 10 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000013:0000000",
    "sig_text": "รับประทาน ครั้งละ 1 เม็ด วันละ 3 เวลา ก่อนอาหาร เช้า-กลางวัน-เย็น",
    "quantity": 20,
    "unit_price": 0.5,
    "charge_amount": 10.0,
    "reimb_price": 0.5,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{F55B81A8-283D-46F4-9987-8F3345A5BA32}",
    "reimb_amount": 10.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sks_dispense_item_id": 79734,
    "vn": "630214083044:293886",
    "dispense_id": "000779991",
    "product_category": "1",
    "hospital_drug_id": "1000092",
    "drug_id": "246778",
    "dfs_code": "",
    "dfs_text": "LORazepam TABLETS 1 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000000:1096671",
    "sig_text": "ใช้ตามแพทย์สั่ง 1 เม็ด เวลาไม่นอน ........................................",
    "quantity": 30,
    "unit_price": 1.0,
    "charge_amount": 30.0,
    "reimb_price": 1.0,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{B11BF1F2-B0DF-406A-BAA1-02F212528D61}",
    "reimb_amount": 30.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sks_dispense_item_id": 79733,
    "vn": "630214083044:293886",
    "dispense_id": "000779991",
    "product_category": "1",
    "hospital_drug_id": "1000015",
    "drug_id": "227664",
    "dfs_code": "",
    "dfs_text": "ABILIFY (Aripiprazole) TABLETS 10 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000840:0000000",
    "sig_text": "รับประทานยาวันละ 1 ครั้ง ครั้งละ 1 เม็ด ก่อนนอน",
    "quantity": 30,
    "unit_price": 194.0,
    "charge_amount": 5820.0,
    "reimb_price": 194.0,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{A8BDB7A6-338D-499F-9E9E-0F4D2CB364AD}",
    "reimb_amount": 5820.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sks_dispense_item_id": 79732,
    "vn": "630214083044:293886",
    "dispense_id": "000779991",
    "product_category": "1",
    "hospital_drug_id": "1000164",
    "drug_id": "458267",
    "dfs_code": "",
    "dfs_text": "Melleril (Thioridazine) TABLETS 50 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000840:0000000",
    "sig_text": "รับประทานยาวันละ 1 ครั้ง ครั้งละ 1 เม็ด ก่อนนอน",
    "quantity": 30,
    "unit_price": 2.0,
    "charge_amount": 60.0,
    "reimb_price": 2.0,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{A0620C1F-D077-438E-B00A-243671E2858B}",
    "reimb_amount": 60.0,
    "multiple_dispense": null,
    "supply_for": null
  },
  {
    "ovst_sks_dispense_item_id": 79731,
    "vn": "630214083044:293886",
    "dispense_id": "000779991",
    "product_category": "1",
    "hospital_drug_id": "1000163",
    "drug_id": "458907",
    "dfs_code": "",
    "dfs_text": "Melleril 25 mg(Thioridazine) tablet 25 mg",
    "pack_size": "เม็ด",
    "sig_code": "0000011:0000000",
    "sig_text": "รับประทาน ครั้งละ    1     เม็ด วันละ 1 ครั้ง หลังอาหารเช้า",
    "quantity": 30,
    "unit_price": 1.5,
    "charge_amount": 45.0,
    "reimb_price": 1.5,
    "product_selection_code": "",
    "refill": "0",
    "claim_control": "OD",
    "claim_category": null,
    "opi_guid": "{8B641850-60E0-4B26-B488-A649A7ED3D06}",
    "reimb_amount": 45.0,
    "multiple_dispense": null,
    "supply_for": null
  }
]
```
