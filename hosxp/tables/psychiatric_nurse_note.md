# `psychiatric_nurse_note`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| psychiatric_nurse_note_id | int(11) | NO | PRI | 0 |  |  |
| psychiatric_nurse_note_date | date | YES | MUL | NULL |  |  |
| psychiatric_nurse_note_time | varchar(20) | YES |  | NULL |  |  |
| psychiatric_nurse_note_identify | text | YES |  | NULL |  |  |
| psychiatric_nurse_note_objective | text | YES |  | NULL |  |  |
| psychiatric_nurse_note_activity | text | YES |  | NULL |  |  |
| psychiatric_nurse_note_estimate_result | text | YES |  | NULL |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| psychiatric_nurse_note_staff | varchar(250) | YES |  | NULL |  |  |
| psychiatric_nurse_note_service_id | int(11) | YES | MUL | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| psychiatric_nurse_note_type | int(2) | YES |  | NULL |  |  |
| nurse_note_type | varchar(2) | YES | MUL | NULL |  |  |
| type_date_new | date | YES |  | NULL |  |  |
| ndate | date | YES |  | NULL |  |  |
| ntime | time | YES |  | NULL |  |  |
| st | int(1) | YES |  | NULL |  |  |
| start_date | datetime | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| an | an | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| nurse_note_type | nurse_note_type | no | 1 |
| PRIMARY | psychiatric_nurse_note_id | yes | 1 |
| psychiatric_nurse_note_date | psychiatric_nurse_note_date | no | 1 |
| psychiatric_nurse_note_service_id | psychiatric_nurse_note_service_id | no | 1 |
| vn | vn | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "psychiatric_nurse_note_id": 1,
    "psychiatric_nurse_note_date": "2024-09-04",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": "เสี่ยงต่อการเกิดอุบัติเหตุ เนื่องจาก......................\r\nข้อสนับสนุน\r\nS:  ....................... \r\nO: .........................",
    "psychiatric_nurse_note_objective": "วัตถุประสงค์\r\n- ผู้ป่วยปลอดภัย ไม่เกิดอุบัติเหตุ\r\nเกณฑ์การประเมินผล\r\n-  ไม่ได้รับอุบัติเหตุ ตลอดระยะเวลาที่รักษาในโรงพยาบาล",
    "psychiatric_nurse_note_activity": "1. ประเมินภาวะรู้สติ การรับรู้เวลาสถานที่ และบุคคลและประเมินความเสี่ยง SAVE (S..A..V...E...)\r\n2. ให้การช่วยเหลือการปฏิบัติกิจวัตรประจำวันและการปฏิบัติกิจกรรมต่างๆ กรณีมีข้อจำกัดด้านการเคลื่อนไหว/การทรงตัวไม่ดี\r\n3. จำกัดพฤติกรรมด้วยการผูกมัด กรณีไม่มีสมาธิ สับสน\r\n4. จัดสภาพแวดล้อมให้ปลอดภัย ไม่มีสิ่งกีดขวาง\r\n5. ดูแลให้ยาตามแผนการรักษา                                   \r\n6. เฝ้าระวังอาการข้างเคียงจากกการใช้ยาความเสี่ยงสูง                          ",
    "psychiatric_nurse_note_estimate_result": "ผู้ป่วยปลอดภัยไม่เกิดอุบัติเหตุ",
    "vn": "670725090155",
    "an": "670001279",
    "psychiatric_nurse_note_staff": "nathee",
    "psychiatric_nurse_note_service_id": 102,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 0,
    "nurse_note_type": "",
    "type_date_new": null,
    "ndate": "2024-09-04",
    "ntime": "11:29:45",
    "st": 0,
    "start_date": "2024-09-04 11:29:45"
  },
  {
    "psychiatric_nurse_note_id": 2,
    "psychiatric_nurse_note_date": "2024-09-04",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": "มีพฤติกรรมการเรียกร้องความสนใจสูง\r\nเนื่องจาก........\r\nข้อมูลสนับสนุน\r\nS : \r\nO : ",
    "psychiatric_nurse_note_objective": "วัตถุประสงค์\r\nผู้ป่วยเรียนรู้วิธีการในการตอบสนองที่เหมาะสมตามความต้องการของตนเอง\r\nเกณฑ์การประเมินผล\r\n1. ผู้ป่วยไว้วางใจและสามารถระบายความรู้สึกและความต้องการของตนเองกับพยาบาล\r\n2. ผู้ป่วยตอบสนองความต้องการด้วยตนเองและขอความช่วยเหลือจากผู้อื่นด้วยวิธีที่เหมาะสม",
    "psychiatric_nurse_note_activity": "1. สร้างสัมพันธภาพเพื่อการบำบัด \r\n2. ค้นหาความต้องการของผู้ป่วยและฝึกทักษะ วิธีการจัดการการเรียนรู้ที่เหมาะสมในการตอบสนองความต้องการด้วยตนเอง  \r\n3. ให้ความรู้แก่ญาติเกี่ยวกับการจัดการพฤติกรรมของผู้ป่วยและการจัดการพฤติกรรมที่ไม่เหมาะสม\r\n4. สังเกตบันทึก และรายงานพฤติกรรมของผู้ป่วยโดยละเอียด",
    "psychiatric_nurse_note_estimate_result": "พฤติกรรมเรียกร้องความสนใจ ลดลง\r\nสามารถบอกความต้องการของตนเองได้ด้วยวิธีการที่เหมาะสม",
    "vn": "670725090155",
    "an": "670001279",
    "psychiatric_nurse_note_staff": "nathee",
    "psychiatric_nurse_note_service_id": 100,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 0,
    "nurse_note_type": "",
    "type_date_new": "2024-09-04",
    "ndate": "2024-09-04",
    "ntime": "11:36:33",
    "st": 0,
    "start_date": "2024-09-04 11:36:33"
  },
  {
    "psychiatric_nurse_note_id": 3,
    "psychiatric_nurse_note_date": "2024-09-04",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": "มีโอกาสกลับไปดื่มสุราซ้ำ \r\nข้อสนับสนุน\r\nS:............................\r\nO:...........................",
    "psychiatric_nurse_note_objective": "วัตถุประสงค์\r\n- เพื่อให้ผู้ป่วยมีแรงจูงใจที่จะเลิกดื่มสุรา\r\n- เพื่อเสริมสร้างศักยภาพและความรู้สึกมีคุณค่า\r\nเกณฑ์การประเมิน\r\n- ผู้ป่วยมีแนวทางในการปฏิบัติตัวในการลด ละ เลิก การดื่มสุรา\r\n- มีความรู้  และตระหนักเกี่ยวกับผลกระทบจากการเดื่มสุราซ้ำ",
    "psychiatric_nurse_note_activity": "1. สร้างสัมพันธภาพเพื่อการบำบัด\r\n2.ให้การบำบัดทางจิตแบบประคับประคองรายบุคคล\r\n3.กระตุ้นให้ผู้ป่วยเข้าร่วมกิจกรรมกลุ่ม กลุ่มจิตบำบัด สำหรับผู้ที่ติดสุราและยาเสพติด \r\n4.เสริมสร้างกำลังใจให้ผู้ป่วยทุกครั้งหลังทำกิจกรรมต่างๆ สำเร็จ โดยเน้นให้ผู้ป่วยรับรู้ถึงคุณค่าและความสามารถของตนเอง\r\n5.ให้ความรู้แก่ญาติเกี่ยวกับลักษณะ และพฤติกรรมการช่วยเหลือผู้ป่วยขณะอยู่ที่บ้าน",
    "psychiatric_nurse_note_estimate_result": "-ผู้ป่วยสามารถบอกถึงผลกระทบเกี่ยวกับโทษของการดื่มสุราซ้ำ         \r\n-ผู้ป่วยบอกถึงระดับแรงจูงใจต่อการเลิกดื่มสุรา....คะแนน/ หรือมีสิ่งยึดเหนี่ยวที่จะทำให้เลิกดื่มสุราได้คือ..",
    "vn": "670725090155",
    "an": "670001279",
    "psychiatric_nurse_note_staff": "nathee",
    "psychiatric_nurse_note_service_id": 103,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 0,
    "nurse_note_type": "",
    "type_date_new": "2024-09-04",
    "ndate": "2024-09-04",
    "ntime": "11:36:58",
    "st": 0,
    "start_date": "2024-09-04 11:36:58"
  },
  {
    "psychiatric_nurse_note_id": 4,
    "psychiatric_nurse_note_date": "2024-09-04",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": "เสี่ยงต่อการเกิดอันตรายหลังจากการรักษาด้วยไฟฟ้า (MECT)\r\nS : ผู้ป่วยบอกว่า ...........................\r\n   : ...............................................\r\n   : ............................................\r\nO : ผู้ป่วยหลังกลับมาจากรับการรักษาด้วยไฟฟ้า\r\n   : ได้รับการส่งต่ออาการของผู้ป่วยหลังจากทำการรักษาด้วยไฟฟ้าจากพยาบาลวิสัญญีว่า ผู้ป่วยเกิดภาวะแทรกซ้อนจากการรักษาด้วยไฟฟ้า คือ....................................\r\n   : สัญญาณชีพที่ได้รับการส่งต่อจากพยาบาลวิสัญญี มีความผิดปกติ โดยพบว่า : T =............C  PR =.....bpm\r\nRR =....../min BP........./...........mm.Hg  SpO2 =................%",
    "psychiatric_nurse_note_objective": "-เพื่อป้องกันอันตรายหลังจากผู้ป่วยได้รับการรักษาด้วยไฟฟ้า",
    "psychiatric_nurse_note_activity": "- ประเมินอาการผู้ป่วย และติดตามสัญญาณชีพ (V/S) อย่างต่อเนื่อง  จนกระทั่ง stable \r\n- ประเมินภาวะแทรกซ้อน หลังจากการรักษาด้วยไฟฟ้าภายในเวรอย่างต่อเนื่อง\r\n- รายงานอาการผิดปกติให้แพทย์ทราบ เพื่อปรับเปลี่ยนการรักษา\r\n- ดูแลให้ผู้ป่วยได้รับยาตามแผนการรักษา\r\n- ดูแลให้ผู้ป่วยได้รับสารอาหาร และสารน้ำอย่างเพียงพอ\r\n-บันทึกและทำการติดตามสัญญาณชีพต่อ ทุก 4 ชั่วโมง ",
    "psychiatric_nurse_note_estimate_result": "- ไม่เกิดภาวะแทรกซ้อนหลังจากทำการรักษาด้วยไฟฟ้า\r\n-  สัญญาณชีพอยู่ในเกณฑ์ปกติ  \r\n(เมื่อแรกรับผู้ป่วย กลับจากการรักษาด้วยไฟฟ้า เวลา ............ น.) :\r\nT =.............C  PR =...............bpm, RR =........../min BP......./.........mm.Hg \r\nSpO2 =.........% (ในเวลา 14.00 น.) :\r\nT =..................C  PR =..........bpm, RR =......../min  BP........../.............mm.Hg.",
    "vn": "670725090155",
    "an": "670001279",
    "psychiatric_nurse_note_staff": "nathee",
    "psychiatric_nurse_note_service_id": 141,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 0,
    "nurse_note_type": "",
    "type_date_new": "2024-09-04",
    "ndate": "2024-09-04",
    "ntime": "11:37:12",
    "st": 0,
    "start_date": "2024-09-04 11:37:12"
  },
  {
    "psychiatric_nurse_note_id": 6,
    "psychiatric_nurse_note_date": "2024-09-04",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": "มีพฤติกรรมการเรียกร้องความสนใจสูง\r\nเนื่องจาก........\r\nข้อมูลสนับสนุน\r\nS : \r\nO : ",
    "psychiatric_nurse_note_objective": "วัตถุประสงค์\r\nผู้ป่วยเรียนรู้วิธีการในการตอบสนองที่เหมาะสมตามความต้องการของตนเอง\r\nเกณฑ์การประเมินผล\r\n1. ผู้ป่วยไว้วางใจและสามารถระบายความรู้สึกและความต้องการของตนเองกับพยาบาล\r\n2. ผู้ป่วยตอบสนองความต้องการด้วยตนเองและขอความช่วยเหลือจากผู้อื่นด้วยวิธีที่เหมาะสม",
    "psychiatric_nurse_note_activity": "1. สร้างสัมพันธภาพเพื่อการบำบัด \r\n2. ค้นหาความต้องการของผู้ป่วยและฝึกทักษะ วิธีการจัดการการเรียนรู้ที่เหมาะสมในการตอบสนองความต้องการด้วยตนเอง  \r\n3. ให้ความรู้แก่ญาติเกี่ยวกับการจัดการพฤติกรรมของผู้ป่วยและการจัดการพฤติกรรมที่ไม่เหมาะสม\r\n4. สังเกตบันทึก และรายงานพฤติกรรมของผู้ป่วยโดยละเอียด",
    "psychiatric_nurse_note_estimate_result": "พฤติกรรมเรียกร้องความสนใจ ลดลง\r\nสามารถบอกความต้องการของตนเองได้ด้วยวิธีการที่เหมาะสม",
    "vn": "670725090155",
    "an": "670001279",
    "psychiatric_nurse_note_staff": "nathee",
    "psychiatric_nurse_note_service_id": 100,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 0,
    "nurse_note_type": "",
    "type_date_new": "2024-09-04",
    "ndate": "2024-09-04",
    "ntime": "12:38:05",
    "st": 0,
    "start_date": "2024-09-04 12:38:05"
  },
  {
    "psychiatric_nurse_note_id": 7,
    "psychiatric_nurse_note_date": "2024-09-04",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": "มีพฤติกรรมการเรียกร้องความสนใจสูง\r\nเนื่องจาก........\r\nข้อมูลสนับสนุน\r\nS : \r\nO : ",
    "psychiatric_nurse_note_objective": "วัตถุประสงค์\r\nผู้ป่วยเรียนรู้วิธีการในการตอบสนองที่เหมาะสมตามความต้องการของตนเอง\r\nเกณฑ์การประเมินผล\r\n1. ผู้ป่วยไว้วางใจและสามารถระบายความรู้สึกและความต้องการของตนเองกับพยาบาล\r\n2. ผู้ป่วยตอบสนองความต้องการด้วยตนเองและขอความช่วยเหลือจากผู้อื่นด้วยวิธีที่เหมาะสม",
    "psychiatric_nurse_note_activity": "1. สร้างสัมพันธภาพเพื่อการบำบัด \r\n2. ค้นหาความต้องการของผู้ป่วยและฝึกทักษะ วิธีการจัดการการเรียนรู้ที่เหมาะสมในการตอบสนองความต้องการด้วยตนเอง  \r\n3. ให้ความรู้แก่ญาติเกี่ยวกับการจัดการพฤติกรรมของผู้ป่วยและการจัดการพฤติกรรมที่ไม่เหมาะสม\r\n4. สังเกตบันทึก และรายงานพฤติกรรมของผู้ป่วยโดยละเอียด",
    "psychiatric_nurse_note_estimate_result": "พฤติกรรมเรียกร้องความสนใจ ลดลง\r\nสามารถบอกความต้องการของตนเองได้ด้วยวิธีการที่เหมาะสม",
    "vn": "670830090822",
    "an": "670001503",
    "psychiatric_nurse_note_staff": "yuwa231",
    "psychiatric_nurse_note_service_id": 100,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 5,
    "nurse_note_type": "2b",
    "type_date_new": "2024-09-04",
    "ndate": "2024-09-04",
    "ntime": "14:03:28",
    "st": 0,
    "start_date": "2024-09-04 14:03:28"
  },
  {
    "psychiatric_nurse_note_id": 8,
    "psychiatric_nurse_note_date": "2024-09-04",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": "วิตกกังวล เนื่องจาก.................\r\nข้อมูลสนับสนุน\r\nS : \r\nO : ",
    "psychiatric_nurse_note_objective": "วัตถุประสงค์\r\n- ลดความวิตกกังวลเกี่ยวกับ....\r\nเกณฑ์การประเมินผล\r\n1. ผู้ป่วยสีหน้าสดชื่น แจ่มใสท่าทางวิตกกังวลลดน้อยลง\r\n",
    "psychiatric_nurse_note_activity": "1. สร้างสัมพันธภาพเพื่อการบำบัด\r\n2. ประเมินความคิด อารมณ์ การรับรู้และพฤติกรรมของผู้ป่วยในเรื่องการอยู่รับการรักษาในโรงพยาบาล\r\n",
    "psychiatric_nurse_note_estimate_result": "ผู้ป่วยสีหน้าสดชื่น สนใจตนเองและสิ่งแวดล้อมรอบตัวมากขึ้น สามารถทักทายและพูดคุยกับผู้อื่นได้เหมือนปกติ ผู้ป่วยสามารถเข้ากลุ่มกิจกรรมและแสดงความคิดเห็นร่วมกับผู้อื่นได้\r\n",
    "vn": "670819092017",
    "an": "670001419",
    "psychiatric_nurse_note_staff": "nathee",
    "psychiatric_nurse_note_service_id": 110,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 8,
    "nurse_note_type": "1b",
    "type_date_new": null,
    "ndate": "2024-09-04",
    "ntime": "14:03:51",
    "st": 0,
    "start_date": "2024-09-04 14:03:37"
  },
  {
    "psychiatric_nurse_note_id": 9,
    "psychiatric_nurse_note_date": "2024-09-05",
    "psychiatric_nurse_note_time": "1",
    "psychiatric_nurse_note_identify": " เสี่ยงต่อการเกิดอันตราย/ภาวะแทรกซ้อนจากการรับประทานยาความเสี่ยงสูง\r\nข้อมูลสนับสนุน\r\n S: หนูไม่ไหวแล้วค่ะ บอกหมอเปลี่ยนยาให้หนูด้วย\r\nO:  ผู้ป่วยพูดไม่ค่อยชัดน้ำลายเต็มปาก \r\nผู้ป่วยได้รับยาตามแผนการรักษา คือ Depakine ,เคยได้ยาฉีด Haldal Dec จากร.พ.สมุทรปราการ เมื่อวันที่21/8/67\r\n",
    "psychiatric_nurse_note_objective": "วัตถุประสงค์\r\n1.ผู้ป่วยปลอดภัย/ไม่ได้รับอันตรายจากการรับประทานยาที่มีความเสี่ยงสูง\r\nเกณฑ์การประเมินผล\r\n1.ผู้ป่วยสามารถบอกเกี่ยวกับอาการช้างเคียงของยาได้ และสามารถประเมินอาการผิดปกติของยาได้\r\n2.ไม่มีภาวะแทรกซ้อนที่เป็นอันตรายเกิดขึ้นกับผู้ป่วย ตลอดระยะเวลาที่รักษาตัวในโรงพยาบาล",
    "psychiatric_nurse_note_activity": "1.สร้างสัมพันธภาพเพื่อการบำบัด\r\n2.ตรวจวัดสัญญาณชีพทุกวันอย่างต่อเนื่อง\r\n3.ประเมินอาการข้างเคียงของยาความเสี่ยงสูงตามแบบประเมินผู้ป่วยที่ได้ยาความเสี่ยงสูงทุกเวร  เช่น  ภาวะเสียน้ำรุนแรง ทำให้เหงื่อออกมาก ท้องเสีย มีไข้ อาการงุนงง สับสน ระดับการรู้สึกตัว ภาวะมีไข้และเม็ดเลือดขาวต่ำคลื่นไส้อาเจียน เบื่ออาหาร มือสั่น กระตุก การทรงตัวไม่ดี ใจสั่น ง่วงนอน ความดันโลหิตและอัตราการเต้นของหัวใจไม่สม่ำเสมอ \r\n4.ให้ความรู้ผู้ป่วยและญาติเป็นรายบุคคลเกี่ยวกับเหตุผลของการรับประทานยา กลไกการออกฤทธิ์ อาการข้างเคียงของยา และการช่วยเหลือเบื้องต้น และการดูแลตนเองเพื่อป้องกันอันตรายจากการรับประทานยาความเสี่ยงสูง\r\n5.สังเกตอาการเปลี่ยนแปลงและรายงานแพทย์\r\n",
    "psychiatric_nurse_note_estimate_result": "ผู้ป่วยปลอดภัยไม่เกิดอันตราย/ภาวะแทรกซ้อนที่รุนแรงจากการรับ ประทานยาความเสี่ยงสูงผู้ป่วยและญาติมีความรู้และสามารถประเมินภาวะแทรกซ้อนจากการรับประทานยาความเสี่ยงสูงได้",
    "vn": "670827085806",
    "an": "670001483",
    "psychiatric_nurse_note_staff": "yuwa231",
    "psychiatric_nurse_note_service_id": 130,
    "hos_guid": null,
    "psychiatric_nurse_note_type": 6,
    "nurse_note_type": "2c",
    "type_date_new": "2024-09-05",
    "ndate": "2024-09-05",
    "ntime": "8:20:59",
    "st": 0,
    "start_date": "2024-09-05 08:20:59"
  }
]
```
